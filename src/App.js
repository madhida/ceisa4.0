import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      bookings: [],
      idDetilBooking:'rahmad'
    }
  }

  componentDidMount() {
  var config = {
    method: 'GET',
    url: 'https://esbbcext01.beacukai.go.id:8082/DetilBooking/',
    headers: {'Content-Type':'application/json'}
  }  

  this.ambil_data(config)



}

ambil_data(config) {
    // console.log('ok');
    axios.request(config).then(response => {
      // console.log('response: ', response)
      var bookings = [...this.state.bookings]
      var idDetilBooking = [...this.state.idDetilBooking]

      // console.log('response: ', response.data.data[0].first_name);
      bookings = response.data
      // idDetilBooking = bookings.idDetilBooking[1]
      this.setState({
            bookings,
            idDetilBooking:'hidayad'
            // idDetilBooking
        })
      console.log("ok",this.state.bookings)
    }).catch(error => {
      console.log('error: ',error)
    })

      console.log(this.state.bookings)
}


  render () {
    return (
    <div className="container" style={{marginTop:"100px"}}>
      <div className="row">
          <div className="col-md-8 offset-md-2">
             <div className="card">
                          <div className="card-header">
                            Search
                          </div>
                          <div className="card-body">
                            <form>
                            <div className="row">
                                <div className="form-group" style={{margin: "6px"}} >
                                  <label>B/L number</label>
                                  <input type="text" className="form-control" id="formGroupExampleInput"/>
                                </div>
                                <div className="form-group" style={{margin: "6px"}} >
                                  <label>From</label>
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="form-group" style={{margin: "6px"}} >
                                  <label>To</label>
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="form-group" style={{margin: "6px"}} >
                                  <label>Depo</label>
                                  <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group" style={{margin: "6px"}} >   
                                  <label>Plan Date</label>
                                  <input type="date" className="form-control" />
                                </div>
                                <div className="form-group" style={{margin: "6px"}} >
                                  <label>Booking Date</label>
                                  <input type="date" className="form-control" />
                                </div>
                                <div className="form-group" style={{margin: "6px"}} >
                                  <label>B/L date</label>
                                  <input type="date" className="form-control" />
                                </div>
                                <div className="form-group" style={{margin: "6px"}} >
                                  <label>SP2 Valid date</label>
                                  <input type="date" className="form-control" />
                                </div>
                                <div className="form-group" style={{margin: "6px"}} >
                                  <label>SPC valid date</label>
                                  <input type="date" className="form-control" />
                                </div>    
                            </div>
                            <div className="row">
                                <div className="form-group" style={{margin: "6px"}} >
                                  <label>Container Number</label>
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="form-group" style={{margin: "6px"}} >
                                  <label>Container Size</label>
                                  <input type="text" className="form-control" />
                                </div> 
                                <div className="form-group" style={{margin: "6px"}} >
                                  <label>Container Type</label>
                                  <input type="text" className="form-control" p/>
                                </div> 
                                <button type="submit" className="btn btn-primary">Search</button>
                             </div>       
                          </form>
                          </div>
              </div>
          </div>
             
      </div>

      <div className="row">
        <div className="col-md-6">
        <div className="card">
            <div className="card-body">
            <p>Google Maps</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
        <div className="card">
            <div className="card-body">
           {
                    this.state.bookings.map(data =>
                            <div className="row">
                              <div className="col-md-4">
                                     <div>
                                          <p style={{fontSize: "16px"}}>{data.booking.depo}</p>
                                      </div>  
                              </div>

                              <div className="col-md-4">
                                       <div >
                                          <p style={{fontSize: "16px"}}>{data.booking.destination}</p>
                                          <p style={{fontSize: "16px"}}>{data.hargaPenawaran}</p>
                                      </div>       
                              </div>
                              <div className="col-md-4">
                                <button className="btn btn-primary">Edit</button>
                                <br/>
                                <button className="btn btn-danger">delete </button>
                              </div>
                            </div>
                    )
                  }

          

            </div>
          </div>
        </div>

      </div>

    </div>

  );
}
  }


export default App;
