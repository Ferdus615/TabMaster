import Image from "next/image";

const Registration = () => {
  return (
    <div className="flex justify-between items-center gap-20 p-10 rounded-lg shadow-lg bg-indigo-600/20 my-10">
      <div className="flex flex-col items-center">
        <h2 className="mb-5 text-2xl font-medium text-white">Register Here</h2>
        <Image
          src="/logo-w.png"
          width="200"
          height="200"
          alt="logo"
          className="-mb-4"
        />
      </div>
      <div className="flex flex-col items-center ">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            required
            className="p-2 w-80 border border-gray-300 rounded-md"
          />
          <input
            type="insitution"
            placeholder="Institution"
            required
            className="p-2 w-80 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="p-2 w-80 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="p-2 w-80 border border-gray-300 rounded-md"
          />
          <select
            id="roles"
            name="roles"
            required
            className="p-2 w-80 border border-gray-300 bg-transparent text-black rounded-md"
          >
            <option value="" disabled selected>
              Select Role
            </option>
            <option value="team">Team</option>
            <option value="adjudicator">Adjudicator</option>
            <option value="organizer">Organizer</option>
          </select>
          <button
            type="submit"
            className="border-1 border-indigo-500 font-light p-2 rounded-md hover:bg-indigo-600 transition-colors mt-3"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
