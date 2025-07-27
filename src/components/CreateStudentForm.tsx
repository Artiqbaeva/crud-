import React from "react";
import { useStudents } from "../api/hooks/useStudents";

const initialForm = {
  fname: "",
  lname: "",
  birthdate: "",
  address: "",
  phone_number: "",
};

const CreateStudentForm = ({ editingStudent, onClearEdit }: any) => {
  const { useCreateStudent, useUpdateStudent } = useStudents();

  const { mutate: createMutate, isPending: isCreating } = useCreateStudent();
  const { mutate: updateMutate, isPending: isUpdating } = useUpdateStudent();

  const [form, setForm] = React.useState(initialForm);

  React.useEffect(() => {
    if (editingStudent) {
      setForm({
        fname: editingStudent.fname,
        lname: editingStudent.lname,
        birthdate: editingStudent.birthdate,
        address: editingStudent.address,
        phone_number: String(editingStudent.phone_number),
      });
    }
  }, [editingStudent]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      ...form,
      phone_number: Number(form.phone_number),
    };

    if (editingStudent) {
      updateMutate(
        { id: editingStudent.id, ...payload },
        {
          onSuccess: () => {
            setForm(initialForm);
            onClearEdit();
          },
        }
      );
    } else {
      createMutate(payload, {
        onSuccess: () => setForm(initialForm),
      });
    }
  };

  return (
    <div className="container mx-auto my-4">
      <h2 className="text-xl font-bold mb-3">
        {editingStudent ? "Update Student" : "Create Student"}
      </h2>
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
        <div className="flex items-center gap-3 col-span-2">
          <button
            type="submit"
            disabled={isCreating || isUpdating}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {isCreating || isUpdating
              ? editingStudent
                ? "Updating..."
                : "Creating..."
              : editingStudent
              ? "Update"
              : "Submit"}
          </button>
          {editingStudent && (
            <button
              type="button"
              onClick={() => {
                setForm(initialForm);
                onClearEdit();
              }}
              className="px-3 py-2 border rounded text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default React.memo(CreateStudentForm);
