let templateBodyData = {
    totalAmount: 1000.00,
    qtytotal: 20,
    products: [
        
        { name: "Product 1", qty: 10, price: 50 },
        { name: "Product 2", qty: 5, price: 100 },
        { name: "Product 3", qty: 5, price: 150 }
    ],
    user: "John Doe",
    itemArr: [],
    summerySum: 1500.00,
    note: "Thank you for your business."
};


let templateData = {
    convert: true,
    title: "Invoice",
    po_no: "INV-12345",
    organization_name: "My Company",
    time: new Date().toLocaleString(),
    organization_logo: "path/to/logo.png",
    name: "John Doe",
    orgAddress: "1234 Street, City, Country",
    QRcode: "path/to/qrcode.png",
    orgcity: "City",
    barcode: "path/to/barcode.png",
    SupplierName: "Supplier Inc.",
    address: "5678 Supplier St, City, Country",
    call: "+1234567890",
    email: "supplier@example.com",
    taxid: "TAXID12345",
    location_name: "Main Office",
    filllocation: "Warehouse",
    orderNo: "ORD-67890",
    orderDate: "08/01/2024",
    orderDateTime: "08/01/2024 : 22.00",
    delivery_date: "08/10/2024 : 10:30:00",
    user: "John Doe"
};

module.exports = { templateBodyData, templateData };
