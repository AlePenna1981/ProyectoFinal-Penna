import { GiAstronautHelmet } from "react-icons/gi";
const PageNotFound = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <GiAstronautHelmet size={100} className="text-blue-500 mb-4 mt-3" />
        <h1 className="text-4xl font-bold">Error 404</h1>

        <p className="text-lg mt-2">
          Oops... Parece que estás perdido en el espacio amiguero 🚀
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
