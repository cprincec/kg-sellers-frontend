import { notifications } from "@/app/lib/data";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Dispatch, SetStateAction } from "react";

const Notification = ({
    showNotification,
    setShowNotification,
}: {
    showNotification: boolean;
    setShowNotification: Dispatch<SetStateAction<boolean>>;
}) => {
    return (
        <Dialog open={showNotification} onOpenChange={setShowNotification}>
            <DialogContent
                className="w-full h-full flex flex-col gap-3 px-3 md:px-0 py-3 md:left-auto md:right-0 md:translate-x-0 border-none sm:rounded-none"
                closeBtnClassName="mt-4 mr-4"
            >
                <DialogHeader className="border-b border-kaiglo_grey-200 pb-3">
                    <DialogTitle className="text-left px-3 md:px-5 py-4 font-bold text-lg text-kaiglo_grey-900">
                        Notifications
                    </DialogTitle>
                    <DialogDescription className="h-0 w-0 hidden" />
                </DialogHeader>

                <div className="grid gap-1 px-3 md:px-5">
                    {notifications.map((notification, index) => (
                        <div key={index} className="flex justify-between">
                            <div className="grid gap-1 py-2">
                                <div className="flex gap-2 items-center">
                                    <h1 className="text-base font-medium m-0 text-kaiglo_grey-900">
                                        {notification.title}
                                    </h1>
                                    <p className="text-sm text-kaiglo_grey-400">{notification.time}</p>
                                </div>
                                <p className="text-sm text-kaiglo_grey-600">{notification.desc}</p>
                            </div>
                            {notification.isRead === false && (
                                <div className="pt-3">
                                    <div className="w-2 h-2 bg-kaiglo_critical-error rounded-full"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default Notification;
