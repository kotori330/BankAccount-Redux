import { ChangeEvent, FormEvent, useState } from "react";
import { AppDispatch, BankAccount } from "../../action/types";
import { useDispatch } from "react-redux";
import { addAccount } from "../../features/bankAccountSlices";
import { v4 as uuidv4 } from 'uuid';

const AddBankAccountModal = ({ toggleModal }: { toggleModal: () => void }) => {
  const dispatch = useDispatch<AppDispatch>();
  const addBankAccountFields: {
    label: string;
    name: keyof BankAccount; // Ensure type safety, name can only be "name", "owner" or "balance"
    type: string;
  }[] = [
    { label: "Account Name", name: "name", type: "text" },
    { label: "Owner Name", name: "owner", type: "text" },
    { label: "Balance", name: "balance", type: "number" },
  ];

  const [formData, setFormData] = useState<BankAccount>({
    id: uuidv4(),
    name: "",
    owner: "",
    balance: 0,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newItem = {
      id: uuidv4(),
      name: formData.name,
      owner: formData.owner,
      balance: formData.balance,
    };
    dispatch(addAccount(newItem));
    toggleModal();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "balance" ? Number(value) : value,
    }));
  };

  return (
    <>
      <div className="bg-slate-700/40 w-full h-full fixed top-0 left-0">
        <div className="rounded-2xl h-auto w-auto max-w-[48rem] bg-white mx-auto mt-30 p-5">
          <h1 className="font-bold text-3xl text-center">Add Bank Account</h1>

          <form action="">
            {addBankAccountFields.map((item) => {
              return (
                <div className="relative" key={item.name}>
                  <label htmlFor={item.name} className="text-2xl font-bold">
                    {item.label}
                  </label>
                  <input
                    type={item.type}
                    name={item.name}
                    value={formData[item.name] || ""} // if initial value = 0 => "" instead
                    onChange={handleChange}
                    className="w-full text-xl border border-slate-400 p-4 rounded-2xl mt-4 mb-10"
                  />
                  {item.name === "balance" && (
                    <span className="absolute right-4 top-20 transform -translate-y-1/2 text-xl">
                      $
                    </span>
                  )}
                </div>
              );
            })}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="bg-blue-300/80 px-4 py-2 rounded-2xl mx-2 border border-blue-400/40 hover:cursor-pointer hover:opacity-70 text-3xl w-full"
                onClick={toggleModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-300/80 px-4 py-2 rounded-2xl mx-2 border border-blue-400/40 hover:cursor-pointer hover:opacity-70 text-3xl w-full"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBankAccountModal;
