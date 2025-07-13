import Image from "next/image";

const Registration = () => {
  return (
    <form action="post" className="grid  grid-cols-1 w-full max-w-sm gap-8">
      <Image
        src="/logo-wide-w.svg"
        alt="Registration"
        width={150}
        height={150}
      />

      <h1 className="text-2xl/8 font-medium">Register here</h1>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-base">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="border-1 border-zinc-700 rounded-md p-2 bg-[#10172a]/40"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="fullname" className="text-base">
          Full Name
        </label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          required
          className="border-1 border-zinc-700 rounded-md p-2 bg-[#10172a]/40"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="institution" className="text-base">
          Institution
        </label>
        <input
          type="text"
          id="institution"
          name="institution"
          required
          className="border-1 border-zinc-700 rounded-md p-2 bg-[#10172a]/40"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-base">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="border-1 border-zinc-700 rounded-md p-2 bg-[#10172a]/40"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="role" className="text-base">
          Select Role
        </label>
        <select
          id="role"
          name="role"
          required
          className="border-1 border-zinc-700 rounded-md p-2 bg-[#10172a]/40"
        >
          <option value="student">Debater</option>
          <option value="teacher">Adjudictor</option>
          <option value="admin">Organizer</option>
        </select>
      </div>

      <button
        type="submit"
        className="mt-4 bg-[#10172a] text-white p-2 rounded-lg hover:cursor-pointer hover:bg-zinc-900 transition-colors duration-200"
      >
        Register
      </button>

      <p className="mt-4 text-sm text-zinc-400">
        Already have an account?{" "}
        <a href="/login" className="text-white underline">
          Login here
        </a>
      </p>

      <p className="mt-2 text-sm text-zinc-400">
        By registering, you agree to our{" "}
        <a href="/terms" className="text-white underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="/privacy" className="text-white underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
};

export default Registration;
