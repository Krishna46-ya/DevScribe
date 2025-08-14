import { AppbarSkelaton } from "@/skeletons/AppbarSkelaton";
import { InputBoxSkelaton } from "@/skeletons/InputBoxSkelaton";

export default function Loading() {
    return (<>
        <div className="h-screen">
            <AppbarSkelaton></AppbarSkelaton>
            <InputBoxSkelaton />
        </div>
    </>)
}