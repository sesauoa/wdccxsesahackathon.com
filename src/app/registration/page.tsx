export default function Registration() {
    return (
      <div className="h-screen w-full p-20">
        <h1 className="text-4xl font-bold mb-8">Registration</h1>
        <div className="w-full h-full flex justify-center">
          <div className="w-full max-w-6xl px-8">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdTLlGla7-1CdCyQ_UI90ESGZBLUthA9ax7emTlUMdIYssO0g/viewform?embedded=true"
              width="100%"
              height="100%"
              className="border rounded-lg shadow-md"
              title="Registration Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    );
  }
  