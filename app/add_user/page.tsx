import FormInput from "../components/formInput";
import TitleComponent from "../components/title";

const AddUsers = () => {
  return (
    <>
      <TitleComponent title="Add User" />
      <FormInput
        methodSubmit="POST"
        emailValue=""
        id=""
        nameValue=""
        phoneValue=""
      />
    </>
  );
};

export default AddUsers;
