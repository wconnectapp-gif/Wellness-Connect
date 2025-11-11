import React from 'react'

import { TopBar } from "./TopBar";
import { DashboardOverview } from "./DashboardOverview";
import { BookingsList } from './BookingList';


export function MainLayout() {
return (
<div className="flex-1 p-8 overflow-y-auto">
<TopBar />
<DashboardOverview />
< BookingsList />
</div>
);
}
