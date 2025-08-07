import Link from "next/link";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 mt-5">
      <div className="w-full max-w-md">
        <div className="border-0 rounded-md shadow-xl bg-persian backdrop-blur-sm">
          <div className="p-8 text-center space-y-6">
            {/* Success Icon */}
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-rose rounded-full flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L9 17L20 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Main Message */}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-textColor tracking-tight">
                Thank You!
              </h1>
              <p className="text-zinc-text text-lg leading-relaxed">
                Your submission has been received successfully. We appreciate
                you taking the time to reach out to us.
              </p>
            </div>

            {/* Additional Info */}
            <div className="bg-zinc-border rounded-lg p-4 border border-zinc-text">
              <p className="text-sm border-zinc-text">
                We'll get back to you within 48 hours. Keep an eye on your inbox
                for our response.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link
                href="/contact"
                className="flex-1 flex items-center justify-center text-sm p-2 border-1 rounded-sm gap-2 bg-transparent hover:bg-slate-700"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 12L5 12M10 6L5 12L10 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Go Back
              </Link>
              <Link
                href="/"
                className="flex-1 flex items-center justify-center text-sm p-2 border-1 rounded-sm gap-2 bg-slate-700 hover:bg-transparent hover:border-1"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L12 4L20 12V20H4V12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strok-linecap="round"
                    strok-linejoin="round"
                  />
                </svg>
                Home
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-zinc-text">
            This email was send through{" "}
            <a
              href="https://formsubmit.co/"
              className="text-zinc-text hover:text-zinc-border underline underline-offset-4"
            >
              FormSubmit.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
