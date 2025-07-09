import React from "react";
import Image from "next/image";

function Registration() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center bg-white/30 shadow-lg rounded-lg p-10">
        <div>
          <p className="mb-10 text-xl font-medium">Register Here</p>
        </div>
        <div className="flex justify-between items-center gap-20 ">
          <div>
            <Image src="/logo.png" width="200" height="200" alt="logo" />
          </div>
          <div className="flex flex-col items-center ">
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                className="p-2 w-80 border border-gray-300 rounded-md"
              />
              <input
                type="insitution"
                placeholder="Institution"
                className="p-2 w-80 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-2 w-80 border border-gray-300 rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-2 w-80 border border-gray-300 rounded-md"
              />
              <select
                id="roles"
                name="roles"
                className="p-2 w-80 border border-gray-300 bg-blue-100/50 text-black rounded-md"
              >
                <option value="" disabled selected>
                  Select Role
                </option>
                <option value="team">Team</option>
                <option value="adjudicator">Adjudicator</option>
                <option value="organizer">Organizer</option>
                <option value="admin">Admin</option>
              </select>
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors mt-3"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
