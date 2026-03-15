const orderData = [
    { id: "BN-4001", state: "Maharashtra", amount: "₹4,200", mode: "UPI", status: "Packed" },
    { id: "BN-4002", state: "Karnataka", amount: "₹1,850", mode: "COD", status: "In-Transit" },
    { id: "BN-4003", state: "Maharashtra", amount: "₹9,400", mode: "UPI", status: "Delivered" },
    { id: "BN-4004", state: "Delhi", amount: "₹2,100", mode: "COD", status: "Packed" },
    { id: "BN-4005", state: "Maharashtra", amount: "₹3,500", mode: "UPI", status: "Delivered" }
];

/**
 * Renders the order rows into the table body
 * @param {Array} data - The array of order objects
 */
function renderTable(data) {
    const tableBody = document.getElementById('order-rows');
    tableBody.innerHTML = data.map(order => `
        <tr>
            <td style="font-weight:700;">${order.id}</td>
            <td>${order.state}</td>
            <td style="font-weight:800;">${order.amount}</td>
            <td><span class="badge ${order.mode.toLowerCase()}">${order.mode}</span></td>
            <td>
                <span style="color: ${order.status === 'Delivered' ? '#138808' : '#ff9933'}">
                    ● ${order.status}
                </span>
            </td>
        </tr>
    `).join('');
}

/**
 * Filters the table by Indian State
 */
function filterByState(stateName) {
    const filtered = orderData.filter(order => order.state === stateName);
    renderTable(filtered);
}

/**
 * Resets the table to show all entries
 */
function resetTable() {
    renderTable(orderData);
}

// Initializing the dashboard on page load
document.addEventListener('DOMContentLoaded', () => {
    renderTable(orderData);
});
