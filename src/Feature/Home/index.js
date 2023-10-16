import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { userApi } from "../../Utilites/Services";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import CustomModal from "../../Common/Components/Modal";


let selected_user; // global variable for updated value

export function Home() {
  const [showAlert, setShowAlert] = useState(false);
  const  { data } = userApi.useGetUsersQuery({ limit: 50, offset: 0 },{refetchOnMountOrArgChange:true});

  const method = {refetchOnFocus:true,refetchOnMountOrArgChange:true,refetchOnReconnect:true}
  // useEffect(() => {
  //   refetch({ limit: 50, offset: 0 });
  // }, []);
  console.log("method:::",method);
  const { userSlice } = useSelector((state) => state);

  const handleAlert = () => {
    setShowAlert(false);
  };

  function selectedUser(id) {
    let all_data = data?.response?.data?.data;
    let value = all_data.filter((row) => row.id === id);
    selected_user = value[0];
  }

  console.log("showAlert:::",showAlert);

  return (
    <div className="p-5">
      <Table style={{ textAlign: "center" }} bordered hover size="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userSlice.users.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>
                  <Link
                    onClick={() => {
                      selectedUser(item.id);
                      setShowAlert(true);
                    }}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <CustomModal
        showAlert={showAlert}
        handleAlert={handleAlert}
        userDetail={selected_user}
        // refetch={refetch}
      />
    </div>
  );
}
