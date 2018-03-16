import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import ButtonDates from './../../ButtonDates.js'

// class FormImages extends Component {

//   render () {

//     return (
//       <Row>
//         <Col xs={12}>
//            <form>
//         <input className="form-control" placeholder="Select day e.g. dd" />
//               <select id="month" class="form-control" id="sel1">
//                 <option>Select month</option>     
//                 <option value="01">Enero</option>
//                 <option value="02">Febrero</option>
//                 <option value="03">Marzo</option>
//                 <option value="04">Abril</option>
//                 <option value="05">Mayo</option>
//                 <option value="06">Junio</option>
//                 <option value="07">Julio</option>
//                 <option value="08">Agosto</option>
//                 <option value="09">Septiembre</option>
//                 <option value="10">Octubre</option>
//                 <option value="11">Noviembre</option>
//                 <option value="12">Diciembre</option>     
//               </select>
//               <select id="year" class="form-control" id="sel1">
//                 <option>Select year</option>      
//                 <option>2018</option>
//                 <option>2017</option>
//                 <option>2016</option>
//                 <option>2015</option>
//                 <option>2014</option>
//                 <option>2013</option>
//                 <option>2012</option>
//                 <option>2011</option>
//                 <option>2010</option>
//                 <option>2009</option>
//                 <option>2008</option>
//                 <option>2007</option>
//                 <option>2006</option>
//                 <option>2005</option>
//                 <option>2004</option>
//                 <option>2003</option>
//                 <option>2002</option>
//                 <option>2001</option>
//                 <option>2000</option>
//                 <option>1999</option>
//                 <option>1998</option>
//                 <option>1997</option>
//                 <option>1996</option>     
//                 <option>1995</option>
//               </select>
//               <button class="btn btn-outline-success">BUSCAR</button>
//       </form>
//         </Col>
//       </Row>
//       // <ButtonDates/>
//     )
//   }
// }
 



class FormImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Día
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}

export default FormImages;