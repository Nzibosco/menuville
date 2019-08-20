import React, { Component } from "react";
import { Input, FormBtn, FormRow, TextArea } from "../components/form tools/form";
import API from "../utils/API";

class Menu extends Component {
    // setting a state representing customer details
    state = {
        dishes: [],
        // name: "",
        // image: "",
        // detail: "",
        // price: ""
    };
        componentDidMount() {
        this.loadMenu();
    };


    loadMenu = () => {
        API.getMenu()
            .then(res =>
                this.setState({ dishes: res.data })
                //console.log(res.data)
            )
            .catch(err => console.log(err));
    };



//     loadMenu = () => {
//         API.getMenu()
//             .then(res => {
//                 var newData = this.state.dishes.concat([res.data]);  
// this.setState({dishes: newData})
//                 // this.setState({ dishes: res, name: "", image: "", detail: "", price: ""});
//                 console.log(newData);
//             }
//             )
//             .catch(err => console.log(err));
//     };

    // saveCustomer = (customerData) => {
    //     API.saveCustomer(customerData)
    //         .then(res => {
    //             console.log(res);
    //         })
    //         .catch(err => console.log(err));
    // };

    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (this.state.firstname && this.state.lastname && this.state.email && this.state.address) {
    //         API.saveCustomer({
    //             firstname: this.state.firstname,
    //             lastname: this.state.lastname,
    //             email: this.state.email,
    //             address: this.state.address,
    //             phone: this.state.phone
    //         })
    //             .then(res => {
    //                 this.loadCustomers();
    //                 this.setState({
    //                     firstname: "",
    //                     lastname: "",
    //                     email: "",
    //                     address: "",
    //                     phone: ""
    //                 });
    //                 console.log(res)})
    //             .catch(err => console.log(err));
    //     }
    // };

    render() {
        return (
            <div className = "container menu">
              <button>Add a menu item <strong>+</strong></button>  
            {this.state.dishes.length ? (
            <div>
                {this.state.dishes.map(dish => (
                    <div className = "card">
                        <div className = "card-body">
                            <h1 className = "card-title">{dish.name}</h1>
                            <p>{dish.detail}</p>
                            <h1>${dish.price}</h1>
                            <TextArea labeltext = "Add notes"></TextArea>
                            <FormBtn>Order</FormBtn>
                        </div>
                    </div>
                ))}
            </div>
             ) : (
            <h3>No Results to Display</h3>
            )}
            </div>
        );
    }
}
// {this.state.books.length ? (
//     <List>
//       {this.state.books.map(book => (
//         <ListItem key={book._id}>
//           <Link to={"/books/" + book._id}>
//             <strong>
//               {book.title} by {book.author}
//             </strong>
//           </Link>
//           <DeleteBtn onClick={() => this.deleteBook(book._id)} />
//         </ListItem>
//       ))}
//     </List>
//   ) : (
//     <h3>No Results to Display</h3>
//   )}

export default Menu;