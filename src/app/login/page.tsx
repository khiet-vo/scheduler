import { ChangeEvent, FC } from 'react';
import { useState } from 'react';
import { PassThrough } from 'stream';
interface loginProps {}

const login: FC<loginProps> = ({}) => {
  const [input, setInput] = useState({ email: '', password: '' });
  // use server action to submit then set the cookies directly here and redirect here.
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <form>
        <input type="email" value={input.email} onChange={handleChange} />
        <input type="password" value={input.password} onChange={handleChange} />
        <button type="button"> button sign-in</button>
      </form>
    </>
  );
};

export default login;
