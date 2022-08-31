import * as Icons from '@heroicons/react/24/outline';

function App() {
  return (
    <div className="bg-gray-100 h-screen w-screen m-auto bg-teal-50">
      <div>
        <div className="flex h-screen w-auto items-center justify-center">
          <Icons.LightBulbIcon className="w-10 h-10 text-teal-800" />
          <h1 className="text-4xl font-black text-teal-800">
            Tailwind CSS & Hero icons
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
