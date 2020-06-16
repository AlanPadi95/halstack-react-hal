import React, { useState, useEffect } from "react";
import { HalTable, HalAutocomplete } from "@diaas/diaas-react-hal-components";

export default () => {
  const [autocompleteValue, changeAutocompleteValue] = useState("");
  const onChange = (newValue) => {
    changeAutocompleteValue(newValue);
  };

  return (
    <div>
    <div>
      <HalTable
        collectionUrl={
          "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects"
        }
        columns={[
          {
            header: "Name",
            displayProperty: "prospect-last-name",
            sortProperty: "prospect-last-name",
          },
          {
            header: "Email",
            displayProperty: "prospect-email",
            sortProperty: "prospect-create-user",
          },
          {
            header: "Client Number",
            displayProperty: "prospect-client-number",
          },
          {
            header: "Start date",
            displayProperty: "prospect-start-date",
            sortProperty: "prospect-start-date",
          },
        ]}
        headers={{ "x-api-key": "LP1kUdtWt94cgG6EAmJBB9NwqZI8nKNC3CID42EA" }}
      ></HalTable>
    </div>
    <div>
      <HalAutocomplete
        url="https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects"
        propertyName="prospect-full-name"
        label="Autocomplete label"
        onChange={onChange}
        value={autocompleteValue}
        headers={{ "x-api-key": "LP1kUdtWt94cgG6EAmJBB9NwqZI8nKNC3CID42EA" }}
      ></HalAutocomplete>
    </div>
    </div>
  );
};
