// write your custom hook here to control your checkout form
import { useState } from "react";

const useForm = (formFields) => {
    const [values, setValues] = useState(formFields);

    const handleChanges = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
      };

      return [values, handleChanges];
}

export default useForm;