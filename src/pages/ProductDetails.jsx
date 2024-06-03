import { useState } from "react";
import { Flag, Upvote } from "@icons";
import Button from "@components/Button";
import ProductCardMini from "@containers/ProductCardMini";
import ProductMedia from "@containers/ProductMedia";
import Review from "@containers/Review";
import ReviewFormModal from "@containers/ReviewFormModal";
import SectionTitle from "@containers/SectionTitle";

const ButtonWithReviewModal = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   return (
      <>
         <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 text-sm text-primary-500 bg-primary-50 rounded-full active:scale-90 transition-all"
         >
            Write a review
         </button>

         {isModalOpen && <ReviewFormModal onCancel={() => setIsModalOpen(false)} />}
      </>
   );
};

const ProductDetails = () => {
   return (
      <section className="my-12 container space-y-12">
         <header className="w-full flex gap-x-5 gap-y-4 items-center justify-between flex-wrap">
            <div className="w-full sm:w-auto flex gap-x-5">
               <div className="aspect-square h-20 sm:h-24 rounded border shrink-0"></div>

               <div className="space-y-1 sm:space-y-2">
                  <h1 className="text-xl sm:text-3xl font-semibold sm:font-bold text-gray-800">
                     Product name
                  </h1>
                  <p className="sm:text-lg">Tagline</p>
               </div>
            </div>

            <div className="flex gap-x-3">
               <Button
                  size="large"
                  color="border-primary-500 text-primary-500"
                  className="px-8"
                  variant="outlined"
               >
                  Visit
               </Button>

               <Button
                  startIcon={<Upvote className="w-[1.125rem] text-white" />}
                  color="primary"
                  size="large"
                  className="px-8"
               >
                  1250
               </Button>
            </div>
         </header>

         <main className="grid lg:grid-cols-[1fr_22rem] gap-x-12 gap-y-12">
            <div className="min-w-0 lg:pr-12 lg:border-r space-y-12">
               <ProductMedia />

               <section className="space-y-4">
                  <h1 className="text-xl text-gray-800 font-medium">About this product</h1>
                  <div className="space-y-3">
                     <p className="leading-7">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ea corporis
                        sequi. Officia dolorem assumenda, itaque, error dolores voluptatibus enim
                        cumque harum explicabo soluta similique ullam voluptatum, temporibus labore
                        quaerat?
                     </p>
                     <p className="leading-7">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ea corporis
                        sequi. Officia dolorem assumenda, itaque, error dolores voluptatibus enim
                        cumque harum explicabo soluta similique ullam voluptatum, temporibus labore
                        quaerat?
                     </p>
                  </div>
               </section>

               <section className="space-y-4">
                  <div className="flex justify-between">
                     <h1 className="text-xl text-gray-800 font-medium">Rating & Reviews</h1>

                     <div className="flex items-center gap-x-2">
                        {/* <Button variant="text" color="text-primary-500">
                           See all
                        </Button> */}

                        <ButtonWithReviewModal />
                     </div>
                  </div>

                  <div className="grid gap-y-8">
                     {Array.from({ length: 3 }).map((_, i) => (
                        <Review key={i} />
                     ))}
                  </div>
               </section>

               <button className="font-medium flex items-center gap-x-3 text-gray-800">
                  <Flag className="w-5 h-5" />
                  <span>Report this product</span>
               </button>
            </div>

            <aside className="sticky top-24 lg:h-[calc(100vh-8rem)] lg:overflow-hidden">
               <SectionTitle title="Trending Products" />

               <div className="pr-1 h-full grid gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-1 content-start lg:overflow-y-auto lg:box-content">
                  {Array.from({ length: 6 }).map((_, i) => (
                     <ProductCardMini key={i} />
                  ))}
               </div>
            </aside>
         </main>
      </section>
   );
};
export default ProductDetails;