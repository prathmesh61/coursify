import CartCoursesWrapper from "@/components/CartCoursesWrapper";

const CartPage = () => {
  return (
    <div className="relative max-w-screen-2xl mx-auto mt-28 px-4 gap-5 flex flex-col justify-center ">
      <h1 className="font-extrabold text-xl md:text-3xl text-black font-mono">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-12 grid-cols-1 grid-flow-dense  mt-6">
        <div className="lg:col-span-9 grid-cols-1  w-full ">
          <CartCoursesWrapper />
        </div>
      </div>
      <div className="mt-10">
        <h2 className="font-bold text-xl font-mono">You might also like</h2>
      </div>
    </div>
  );
};

export default CartPage;
