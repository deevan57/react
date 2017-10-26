import React from 'react';

class EmpForm extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			ename:'',
			email:'',
			salary:'',
			designation:'',
			web:'',
			mobile:'',
			gender:''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.resetForm = this.resetForm.bind(this);
	}

	handleChange(event){
		const value = event.target.type=='checkbox'? event.target.checked:event.target.value
		this.setState({[event.target.name]:value});
		console.log('handleChange called...');
	}

	resetForm(event){
		this.setState({
			ename:'',
			email:'',
			salary:'',
			designation:'',
			web:'',
			mobile:'',
			gender:''
		});
		console.log('resetForm called...', this.state);
		event.preventDefault();
	}

	handleSubmit(event){
		console.log('handleSubmit called...', this.state);
		event.preventDefault();
	}

	render(){
		return (
		<div className="emp-form">
		  <h2 className="text-center">Employee Form</h2>
		  <form className="form-horizontal">

		  	<div className="form-group">
		  	  <label className="control-label col-sm-2" htmlFor="ename">Name</label>
		  	  <div className="col-sm-10">          
		  	    <input type="text" className="form-control" id="ename" name="ename" value={this.state.ename} onChange={this.handleChange}/>
		  	  </div>
		  	</div>

		    <div className="form-group">
		      <label className="control-label col-sm-2" htmlFor="email">Email:</label>
		      <div className="col-sm-10">
		        <input type="email" className="form-control" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
		      </div>
		    </div>

		    <div className="form-group">
		      <label className="control-label col-sm-2" htmlFor="salary">Salary</label>
		      <div className="col-sm-10">          
		        <input type="text" className="form-control" id="salary" name="salary" value={this.state.salary} onChange={this.handleChange}/>
		      </div>
		    </div>

		    <div className="form-group">
		          <label className="control-label col-sm-2" htmlFor="sel1">Designation</label>
		        <div className="col-sm-10">
		          <select className="form-control" id="sel1" value={this.state.designation} name="designation" onChange={this.handleChange}>
		          	<option value="">Select</option>
		            <option value="Jr Developer">Jr Developer</option>
		            <option value="Developer">Developer</option>
		            <option value="Sr Developer">Sr Developer</option>
		            <option value="Team Lead">Team Lead</option>
		          </select>
		        </div>
		    </div>

		    <div className="form-group">
		    	<label className="control-label col-sm-2" htmlFor="gender">Gender</label>
	    	      <label className="col-sm-2">Male  <input type="radio" name="gender"  value="Male"  onChange={this.handleChange}/></label>
	    	      <label className="col-sm-2">Female  <input type="radio" name="gender"  value="Female"  onChange={this.handleChange}/></label>
		    </div>

		    <div className="form-group">
		    	<label className="control-label col-sm-2" htmlFor="technology">Technology</label>
		        <label className="col-sm-2">Web<input type="checkbox" name="web" checked={this.state.web} onChange={this.handleChange}/></label>
	          	<label className="col-sm-2">Mobile<input type="checkbox" name="mobile" checked={this.state.mobile} onChange={this.handleChange}/></label>
	        </div>

	        <div className="form-group">
	          <label className="control-label col-sm-2" htmlFor="description">Description:</label>
	          <div className="col-sm-10">
	          	<textarea className="form-control" rows="5" id="description"></textarea>
	          </div>
	        </div>
		    
		    <div className="form-group"> 

		      <div className="col-sm-offset-2 col-sm-1">
		        <button className="btn btn-default" onClick={this.resetForm}>Reset</button>
		      </div>

		      <div className="col-sm-1">
		        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Save</button>
		      </div>

		    </div>

		  </form>
		</div>
		);
	}
}

export default EmpForm;