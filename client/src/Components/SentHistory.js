import React from "react";

export default function SentHistory() {
  return (
    <div>
      <div className="tables">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Sent To</th>
              <th scope="col">Address</th>
              <th scope="col">Dispatch Status</th>
              <th scope="col">Date</th>
              <th scope="col">Price (Rupees) </th>
              <th scope="col">Extra Comments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Jane</td>
              <td>a2, jaipur, chennai</td>
              <td>Dispached</td>
              <td>1/1/1 00:00:00</td>
              <td>200</td>
              <td>NA</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Doe</td>
              <td>G21, LA, USA</td>
              <td>Not Dispached</td>
              <td>1/1/1 00:00:00</td>
              <td>500</td>
              <td>Fragile </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="send-main"></div>
    </div>
  );
}
