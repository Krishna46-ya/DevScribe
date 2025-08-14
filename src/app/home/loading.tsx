import { AppbarSkelaton } from "@/skeletons/AppbarSkelaton";
import { HomeBodySkelaton } from "@/skeletons/HomeBodySkelaton";

export default function Loading(){
    return(<>
    <div>
        <AppbarSkelaton></AppbarSkelaton>
        <HomeBodySkelaton></HomeBodySkelaton>
    </div>
    </>)
}