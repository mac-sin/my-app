import React from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';
import '../App.css';
const { TextArea } = Input;

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create A New Post"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Title">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(<Input />)}
            </Form.Item>

            <Form.Item label="Description">
              {getFieldDecorator('description')(<TextArea />)}
            </Form.Item>

            {/* <Form.Item className="collection-create-form_last-form-item"> */}
            <Form.Item style={collectionCreateFormLastFormItem}>
              {getFieldDecorator('modifier', {
                initialValue: 'public',
              })(
                <Radio.Group>
                  <Radio value="public">Public</Radio>
                  <Radio value="private">Private</Radio>
                </Radio.Group>,
              )}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  },
);
  
class CollectionsPage extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      const post = { title: values.title, body: values.description }
      this.props.addHandler(post);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <Button block type="primary" onClick={this.showModal}>
          New Post
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default CollectionsPage;

const collectionCreateFormLastFormItem = {
  marginBottom: 0,
}