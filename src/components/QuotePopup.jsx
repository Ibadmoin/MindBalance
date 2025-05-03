import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaQuoteLeft } from "react-icons/fa"; // You can use any icon you prefer for quotes

export default function QuotePopup({ isOpen, setIsOpen, quote }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 backdrop-blur-none"
          enterTo="opacity-100 backdrop-blur-sm"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 backdrop-blur-sm"
          leaveTo="opacity-0 backdrop-blur-none"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95 translate-y-4"
            enterTo="opacity-100 scale-100 translate-y-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100 translate-y-0"
            leaveTo="opacity-0 scale-95 translate-y-4"
          >
            <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-transparent backdrop-blur-lg p-6 text-left align-middle shadow-xl transition-all border border-white/30">
              <div className="flex flex-col items-center text-white text-center">
                <FaQuoteLeft className="text-green-300 text-4xl mb-2" />
                <Dialog.Title as="h3" className="text-xl font-semibold leading-6">
                  Quote of the Day
                </Dialog.Title>
                <p className="mt-4 text-lg italic">"{quote}"</p>
                
                {/* Close Button */}
                <div className="mt-6">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-6 py-2 bg-white/20 hover:bg-white/30 rounded-lg border border-white/30 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
