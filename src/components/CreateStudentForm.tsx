import React from "react";
import { useStudents } from "../api/hooks/useStudents";

const CreateStudentForm = () => {
  const { createStudent } = useStudents();
  const { mutate: createMutate, isPending } = createStudent();

  const [form, setForm] = React.useState({
    fname: "",
    lname: "",
    birthdate: "",
    address: "",
    phone_number: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createMutate({
      ...form,
      phone_number: Number(form.phone_number),
    });

    setForm({
      fname: "",
      lname: "",
      birthdate: "",
      address: "",
      phone_number: "",
    });
  };

  return (
    <div className="container mx-auto my-4">
      <h2 className="text-xl font-bold mb-3">Create Student</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
        <input
          name="fname"
          value={form.fname}
          onChange={handleChange}
          placeholder="First Name"
          required
          className="border px-3 py-1 rounded-lg border-gray-300"
        />
        <input
          name="lname"
          value={form.lname}
          onChange={handleChange}
          placeholder="Last Name"
          required
          className="border px-3 py-1 rounded-lg border-gray-300"
        />
        <input
          name="birthdate"
          value={form.birthdate}
          onChange={handleChange}
          type="date"
          required
          className="border px-3 py-1 rounded-lg border-gray-300"
        />
        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Address"
          required
          className="border px-3 py-1 rounded-lg border-gray-300"
        />
        <input
          name="phone_number"
          value={form.phone_number}
          onChange={handleChange}
          placeholder="Phone Number"
          type="number"
          required
          className="border px-3 py-1 rounded-lg border-gray-300"
        />
        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {isPending ? "Creating..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default React.memo(CreateStudentForm);
