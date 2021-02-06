import { renderHook, act } from "@testing-library/react-hooks";
import useForm from "../useForm";

describe("useForm", () => {
  it("car respond to correct actions", () => {
    const submit = jest.fn();

    const { result } = renderHook(() =>
      useForm({
        validate: (data) => {
          if (data.name.length < 10) return { name: "name is too short" };
          return {}
        },
        onSubmit: submit,
      })
    );

    act(() => {
      result.current.dispatchFormData({
        target: { value: "paolo", name: "name" },
      });
      result.current.dispatchFormData({
        target: { value: "rossi", name: "surname" },
      });
    });
    expect(result.current.formData).toEqual({
      name: "paolo",
      surname: "rossi",
    });



    act(() => {
      result.current._onSubmit({ preventDefault: () => {} });
    });
    expect(result.current.errors).toEqual({ name: "name is too short" });
    expect(submit).not.toHaveBeenCalled();


    act(() => {
      result.current.dispatchFormData({
        target: { value: "paolisssimo", name: "name" },
      });
    });
    act(() => {
      result.current._onSubmit({ preventDefault: () => {} });
    });
    expect(result.current.formData).toEqual({
      name: "paolisssimo",
      surname: "rossi",
    });
    expect(result.current.errors).toEqual({});
    expect(submit).toHaveBeenCalled();
  });
});
