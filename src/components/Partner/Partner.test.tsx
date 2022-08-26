import PartnerView from './PartnerView';
import { render } from "@testing-library/react";

import { store } from "../../store/store"
import { Provider } from "react-redux"

test("Testing the PartnerView Component", () => {

    let partner = {
        latitude: 42.6661417,
        partner_id: 12,
        name: 'Bluebell Robles',
        longitude: 23.293435,
        pic: '',
        distance: 100
    }
  
    render(<Provider store={store}><PartnerView partner={partner} key={1} /></Provider>);
  
});