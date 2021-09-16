import { Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import Content from '../../components/content';

const apiUrl = process.env.SENDMAIL_API_URL!;

const Contact = () => {
    const [ submitting, setSubmitting ] = useState<boolean>(false);

    const initialValues = {
        _replyto: "",
        message: ""
    }

    const validationSchema = Yup.object().shape({
        _replyto: Yup.string().email('形式が正しくありません').required('入力必須です'),
        message: Yup.string().max(200, '200文字以内で入力して下さい').required('入力必須です')
    })

    const getDisabled = (errors: any, touched: any) => {
        if(submitting) {
            return true;
        } else {
            if((errors.message || errors._replyto) || (!touched.message && !touched._replyto)) {
                return true;
            } else {
                return false;
            }
        }
    }

    const text = (
        <>
            <div>
                <Formik
                    initialValues={initialValues}
                    onSubmit={async (values) => {
                        console.log(values);
                    }}
                    validationSchema={validationSchema}
                    render={(props) => (
                        <form action={apiUrl} method="POST">
                            <div>
                                <label htmlFor="_replyto">メールアドレス</label>
                                <input
                                    id="_replyto"
                                    name="_replyto"
                                    type="email"
                                    value={props.values._replyto}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                />
                                {(props.errors._replyto && props.touched._replyto) && (
                                    <span>{props.errors._replyto}</span>
                                )}
                            </div>
                            <div>
                                <label htmlFor="message">メッセージ</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={props.values.message}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                ></textarea>
                                {(props.errors.message && props.touched.message) && (
                                    <span>{props.errors.message}</span>
                                )}
                            </div>
                            <button type="button" onClick={props.handleReset}>取消</button>
                            <button type="submit" disabled={getDisabled(props.errors, props.touched)}>送信</button>
                        </form>
                    )}
                />
            </div>
        </>
    )

    return (
        <>
            <Content
                contentTitle='お問い合わせ'
                text={text}
            />
        </>
    )
}

export default Contact;