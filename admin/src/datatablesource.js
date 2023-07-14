export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.img || "https://i.ibb.co/MBTjqXQ/no-avatar.gif"}
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  { field: "name", headerName: "Name", width: 100 },
  { field: "type", headerName: "Type", width: 100 },
  { field: "title", headerName: "Title", width: 250 },
  { field: "city", headerName: "City", width: 100 },
];

export const roomColumns = [
  {field: "_id", headerName: "ID", width: 70},
  {field: "title", headerName: "Title", width: 250},
  {field: "desc", headerName: "Description", width: 200},
  {field: "price", headerName: "Price", width: 100},
  {field: "maxPeople", headerName: "Max people", width: 100},
]