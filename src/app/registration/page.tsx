import { FORM_URL } from "../../data/registrationdata";

export default function Registration() {
  return (
    <div className="h-screen w-full p-20">
    <h1 className="text-4xl font-bold mb-8">Registration</h1>
    <div className="w-full h-full flex justify-center">
        <div className="w-full max-w-6xl px-4 sm:px-6">
          <iframe
            src={FORM_URL}
            width="100%"
            height="100%"
            className="w-full max-w-3xl mx-auto border rounded-lg bg-white shadow-md"
            title="Registration Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
}
