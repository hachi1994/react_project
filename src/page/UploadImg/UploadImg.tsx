import { Upload, message, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
const props = {
    name: 'file',
    action: '/api/uploadImg',
    // headers: {
    //     authorization: 'authorization-text',
    // },
    onChange(info: any) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};
function UploadImgs() {
    return (
        <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
    )
}
export default UploadImgs