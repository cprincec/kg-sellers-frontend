import { useStoreSetupContext } from "@/app/(auth)/contexts/storeSetupContext";
import useSaveTermsOfContract from "@/app/(auth)/hooks/register/storeSetup/useSaveTermsOfContract";
import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const TermsOfContractForm = ({ showMainTitle = true }: { showMainTitle?: boolean }) => {
    const { setCurrentStep } = useStoreSetupContext();
    const { isSavingTermsOfContract, saveTermsOfContract } = useSaveTermsOfContract();

    return (
        <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} className="grid gap-8">
            {showMainTitle && <h2 className="text-xl font-bold">Kaiglo’s Terms of Contract</h2>}
            <section>
                <h3 className="text-base font-bold text-kaiglo_grey-900 mb-1 md:mb-2">INTRODUCTION</h3>
                <p className="">
                    Lorem ipsum dolor sit amet consectetur. Ornare malesuada et viverra a. Praesent lacus
                    sagittis pretium eget. Tristique arcu leo sed sit sit quam erat ultrices. Ultricies tempus
                    in quisque euismod venenatis maecenas fames. Tristique in iaculis bibendum nec aliquam sit
                    feugiat nibh et. Diam nec vehicula adipiscing dictum porta odio amet posuere odio. Libero
                    sit orci suscipit felis sed aliquet. Cras ultricies mattis netus quis aliquam nunc.
                    Sodales habitasse tellus sit viverra risus quisque. Natoque mattis et proin duis. Sapien
                    in et ipsum odio phasellus consectetur quis tincidunt nisl. Accumsan nulla neque enim
                    pellentesque. Sagittis elementum blandit pulvinar amet rhoncus pulvinar est tortor
                    consectetur. Aliquet imperdiet turpis tristique proin accumsan. Eget vulputate blandit id
                    aliquet nulla mi. Ut dictum sed lacus ac phasellus viverra. Nunc morbi tincidunt urna
                    proin.
                </p>
            </section>
            <section>
                <h3 className="text-base font-medium mb-1 md:mb-2">AGREEMENT</h3>
                <p>
                    Vestibulum ut a risus magna ut maecenas. Sit mattis praesent eget posuere sit duis. Risus
                    tellus enim phasellus faucibus semper ut aliquet. Elementum ligula ut pharetra lorem quis
                    mi leo elit commodo. Natoque tortor a amet morbi nibh proin feugiat viverra ultrices.
                    Aliquet sed at pharetra diam. Nulla ut fermentum lorem in commodo feugiat accumsan.
                    Vulputate augue volutpat amet sit enim in est proin enim. Turpis amet et pharetra
                    tincidunt suspendisse semper quis. Gravida nulla sit neque cursus odio porta. Tortor
                    bibendum enim scelerisque nunc eu pellentesque molestie viverra laoreet. Sapien donec
                    molestie in varius at sit eu dui. Velit sed euismod consectetur lacus fermentum eros leo
                    mi at. Pharetra dictum aenean bibendum tortor erat ullamcorper egestas dui. Sit nulla id
                    tortor malesuada enim sapien id diam. Arcu in imperdiet est et eget sapien sodales non a.
                    Ut aliquet aenean velit semper risus enim est at nibh. Volutpat tempor eros potenti nullam
                    dolor condimentum. Elementum commodo fermentum tellus faucibus a a tristique id arcu.
                    Ullamcorper sed nibh aliquet facilisis tincidunt quis vestibulum eu sed. Vestibulum
                    euismod lacus a feugiat pulvinar. Lectus vulputate non mauris pretium pretium elit
                    venenatis facilisis.
                </p>
            </section>

            <FormNavButtons
                cancelFunc={() => console.log("Agreement cancelled")}
                submitButtonText={"Save Changes"}
                className="grid grid-cols-2 lg:hidden"
                cancelButtonClassName="p-3 lg:min-w-[150px]"
                submitButtonClassName="p-3 lg:min-w-[150px]"
            />

            <div className="hidden lg:flex justify-between items-end">
                <Button
                    variant={"outline"}
                    className="p-3 rounded-full text-kaiglo_grey-700 border-kaiglo_grey-disabled min-w-[150px] h-min"
                >
                    Cancel
                </Button>
                <FormNavButtons
                    className="grid grid-cols-2 lg:w-fit lg:ml-auto"
                    cancelButtonClassName="p-3 lg:min-w-[150px]"
                    cancelFunc={() => setCurrentStep((prev) => prev - 1)}
                    cancelButtonText="Back"
                    submitButtonClassName="p-3 lg:min-w-[150px]"
                    submitButtonText={"I agree"}
                    submitButtonFunc={() => {
                        saveTermsOfContract({ acceptTerms: true });
                    }}
                    disabled={isSavingTermsOfContract}
                />
            </div>
        </motion.div>
    );
};

export default TermsOfContractForm;
