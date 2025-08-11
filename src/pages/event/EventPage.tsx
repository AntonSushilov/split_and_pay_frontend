import { useAppDispatch } from "hooks";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Button, Form, Modal, Input } from "antd";

import type { EventItemDto } from "api/event";
import { eventActions } from "services/event/";
import { useSelector } from "react-redux";
import type { RootState } from "app/store.interface";

export const EventPage = () => {
  const { user } = useSelector((state: RootState) => state.userReducer);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const [form] = Form.useForm();

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };
  const handleOk = (values: EventItemDto) => {
    form.resetFields();

    if (!user) {
      alert("Пользователь не авторизован");
      return;
    }

    dispatch(
      eventActions.createEventItemRequest({
        ...values,
        user_id: user.id,
      } as EventItemDto)
    );
    setIsModalOpen(false);
  };
  return (
    <div>
      <Button onClick={showModal}>Default Button</Button>
      <Outlet />
      <Modal
        title={"Создание события"}
        okText="Создать"
        cancelText="Закрыть"
        open={isModalOpen}
        onCancel={handleCancel}
        width="300px"
        destroyOnHidden={true}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Закрыть
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={() => {
              form
                .validateFields()
                .then((values) => {
                  form.resetFields();
                  handleOk(values);
                })
                .catch((info) => {
                  console.log("Validate Failed:", info);
                });
            }}
          >
            Submit
          </Button>,
          ,
        ]}
      >
        <Form form={form} name="createEvent" autoComplete="off">
          <Form.Item
            name="title"
            rules={[
              {
                required: true,
                message: "Пожалуйста введите название события",
              },
              {
                whitespace: true,
                message: "Название события не может быть пустым",
              },
              {
                min: 3,
                message: "Название события должно быть больше 3 символов",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Введите название" />
          </Form.Item>
          <Form.Item name="description">
            <Input.TextArea placeholder="Введите описание" rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
