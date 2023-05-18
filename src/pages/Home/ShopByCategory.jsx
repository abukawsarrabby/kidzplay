import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    return (
        <div className='text-center'>
            <h1 className='text-2xl font-bold mt-10'> Shop By Category</h1>
            <p className='my-5'>Discover a wide selection of products organized by category on our Shop By Category page.</p>

            <Tabs>
                <TabList>
                    <Tab>sports car</Tab>
                    <Tab>truck</Tab>
                    <Tab>regular car</Tab>
                    <Tab>mini fire truck</Tab>
                    <Tab> mini police car</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 4</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 5</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;