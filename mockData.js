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
    title: "PGSCO -0001",
    trn_no: "1234567810",
    organization_name: "My Company",
    time: new Date("03/07/2022 : 09:00:00").toLocaleString(),
    organization_logo: "path/to/logo.png",
    name: "John Doe",
    orgAddress: "1234 Street, City, Country",
    QRcode: "path/to/qrcode.png",
    orgcity: "City",
    barcode: "path/to/barcode.png",
    SupplierName: "Supplier Inc.",
    address: "5678 Supplier St, City, Country",
    call: "  + 66 099-ccm-1234",
    email: "lisa@gmail.com",
    taxid: "TAXID12345",
    location_name: "Main Office",
    filllocation: "Warehouse",
    orderNo: "ORD-67890",
    orderDate: "08/01/2024",
    orderDateTime: "08/01/2024 : 22.00",
    delivery_date: "08/10/2024 : 10:30:00",
    account: "Cus-0003",
    sku:"LEO-R1",
    custmorName:"Lisa Blackpink"

};

module.exports = { templateBodyData, templateData };
