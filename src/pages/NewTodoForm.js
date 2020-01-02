// import React , { useState } from 'react';
import React from 'react';
import { Form, Icon, Input, Button } from 'antd';

import '../App.css';

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {

    componentDidMount() {
      // To disable submit button at the beginning.
      this.props.form.validateFields();
    }
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
  
    render() {
      const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

      // Only show error after a field is touched.
      const usertitleError = isFieldTouched('title') && getFieldError('title');
      const passbodyError = isFieldTouched('body') && getFieldError('body');
      return (
        <Form layout="inline" onSubmit={this.handleSubmit}>
        
          <Form.Item validateStatus={usertitleError ? 'error' : ''} help={usertitleError || ''}>
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Please input your title!' }],
            })(
              <Input
                prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="title"
                autoComplete="off"
              />,
            )}
          </Form.Item>

          <Form.Item validateStatus={passbodyError ? 'error' : ''} help={passbodyError || ''}>
            {getFieldDecorator('body', {
              rules: [{ required: true, message: 'Please input your Message!' }],
            })(
              <Input
                prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="body"
                autoComplete="off"
              />,
            )}
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
              Submit
            </Button>
          </Form.Item>
          
        </Form>
      );
    }
}
  
const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);

export default WrappedHorizontalLoginForm;

// const NewToDoForm = ({addHandler}) => {
//     const [description, setDescription] = useState("");
//     const [reporter, setReporter] = useState("");

//     const submitHandler = (e) => {
//         e.preventDefault();
//         addHandler( {description, reporter} )
//         setDescription("");
//         setReporter("");
//     }

//     return (
//     <div className="container center">
//         <form onSubmit={submitHandler} className="">
//             <input type="text" 
//                 placeholder="description" 
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)} required 
//             />
//             <input type="text" 
//                 placeholder="reporter" 
//                 value={reporter}
//                 onChange={(e) => setReporter(e.target.value)} required 
//             />
//             <Button type="submit" className="">
//                 <i className="material-icons left">send</i> Add
//             </Button>
//         </form>
//     </div>
//     )}
 
// export default NewToDoForm;