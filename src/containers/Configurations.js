import Input from "../components/form/Input";
import TextArea from "../components/form/TextArea";
import useForm from "../hooks/useForm";
import AddLanguage from "./AddLanguage";
import RemoveLanguage from './RemoveLanguage';

import styles from "./Configurations.module.css"
import ShowLanguage from "./ShowLanguage";
import AddClassLanguage from "./AddClassLanguage";

const validate = (data) => {
  const errors = {};
  if (!data.hasOwnProperty("title") || data.title === "") {
    errors.title = "Title can not be null";
  }
  if (!data.hasOwnProperty("description") || data.description.length <= 6) {
    errors.description = "Description should be longer than 6";
  }
  if (
    !data.hasOwnProperty("email") ||
    !/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})/.test(data.email)
  ) {
    errors.email = "The email provided is not valid";
  }
  return errors;
};

const onSubmit = (data) => console.log(data);

const Configurations = () => {
  const { dispatchFormData, errors, formData, _onSubmit } = useForm({
    validate,
    onSubmit,
  });

  return (
    <form onSubmit={_onSubmit} className={styles.container}>
      <h1>Configuration area</h1>

      <fieldset>
        <AddLanguage /><RemoveLanguage />
        <ShowLanguage /> <AddClassLanguage />
        <Input
          name="title"
          label="Title"
          errors={errors}
          data={formData}
          onChange={dispatchFormData}
        />

        <TextArea
          name="description"
          label="Description"
          errors={errors}
          data={formData}
          onChange={dispatchFormData}
        />

        <Input
          name="email"
          label="Email"
          errors={errors}
          data={formData}
          onChange={dispatchFormData}
        />
      </fieldset>

      <button type="submit">SAVE</button>
    </form>
  );
};
export default Configurations;
