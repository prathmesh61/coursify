import Dashboard from "@/components/Dashboard";
type ParamsType = {
  params: {
    id: string;
  };
};
const Profile = ({ params }: ParamsType) => {
  const { id } = params;

  return (
    <div className="relative max-w-screen-2xl mx-auto mt-24  px-14 gap-5 flex flex-col  ">
      <Dashboard userID={id} />
    </div>
  );
};

export default Profile;
