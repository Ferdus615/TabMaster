import Image from "next/image";

const Registration = () => {
  return (
    <div className="flex justify-between items-center gap-20 bg-green-300/20 p-10 rounded-lg shadow-lg">
      <div className="flex flex-col items-center">
        <h2 className="mb-5 text-2xl font-medium text-green-400">
          Register Here
        </h2>
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
            className="bg-green-400 text-black p-2 rounded-md hover:bg-green-600 transition-colors mt-3"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
