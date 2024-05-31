import { Form, Modal, Button } from "react-bootstrap";
import { useState } from "react";

const FormModal = (props) => {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = async () => {
        console.log(title, url);
        const bookmarkDetail = {
            title: title,
            url: url
        }
        try {
            const response = await fetch('https://crudcrud.com/api/89b8625535ae4c6fa664f6bc2f0bf5d2/bookmark',
                {
                    method: 'POST',
                    body: JSON.stringify(bookmarkDetail),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            if (!response.ok) {
                throw new Error('Failed to add bookmark');
            }
            const data = await response.json();
            props.onHide();
            console.log(data);
        }
        catch (err) {
            console.log(err);
            alert('Failed to add');
        }

    }


    return (
        <Modal show={props.show} onHide={props.onHide} className="modal" >
            <Modal.Header className="text-bg-dark">
                <Modal.Title>Add Website</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-light">
                <Form >
                    <Form.Group className="mt-1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="my-3" >
                        <Form.Label>Website URL</Form.Label>
                        <Form.Control
                            type="url"
                            placeholder="Enter website URL"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className="text-bg-light">
                <Button variant="danger" onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default FormModal;