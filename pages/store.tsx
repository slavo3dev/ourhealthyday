import { FC } from "react";
import { NavBar } from "component";
import { Layout } from "component/Layout";
import { StoreItems } from "component/StoreItems";

export const StorePage: FC = () => {
    return (
        <Layout>
            <NavBar />
            <StoreItems />
        </Layout>
    )
}

export default StorePage;