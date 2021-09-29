import { faCommentDots, faEnvelope, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import Content from '../../components/content';
import { Meta } from '../../components/meta';
import { ids } from '../../libs/ids';
import styles from '../../styles/Contact.module.scss';

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
            <div className={styles.contact}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={async (values) => {
                        console.log(values);
                    }}
                    validationSchema={validationSchema}
                    render={(props) => (
                        <form action={apiUrl} method="POST">
                            <div className={styles.formControl}>
                                <label htmlFor="_replyto" className={styles.label}><FontAwesomeIcon icon={faEnvelope} />メールアドレス</label>
                                <input
                                    id="_replyto"
                                    name="_replyto"
                                    type="email"
                                    value={props.values._replyto}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    className={props.errors._replyto && props.touched._replyto ? `${styles.textInput} ${styles.error}` : styles.textInput}
                                />
                                {(props.errors._replyto && props.touched._replyto) && (
                                    <span className={styles.error_msg}><FontAwesomeIcon icon={faExclamationCircle} />{props.errors._replyto}</span>
                                )}
                            </div>
                            <div className={styles.formControl}>
                                <label htmlFor="message" className={styles.label}><FontAwesomeIcon icon={faCommentDots} />メッセージ</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={props.values.message}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    className={props.errors.message && props.touched.message ? `${styles.textArea} ${styles.error}` : styles.textArea}
                                ></textarea>
                                {(props.errors.message && props.touched.message) && (
                                    <span className={styles.error_msg}><FontAwesomeIcon icon={faExclamationCircle} />{props.errors.message}</span>
                                )}
                            </div>
                            <div className={styles.actions}>
                                <button type="button" onClick={props.handleReset} className={styles.cancel}>入力を削除</button>
                                <button type="submit" disabled={getDisabled(props.errors, props.touched)} className={getDisabled(props.errors, props.touched) ? `${styles.submit} ${styles.disabled}` : styles.submit}>送信</button>
                            </div>
                        </form>
                    )}
                />
            </div>
        </>
    )

    return (
        <>
            <Meta
                title="お問い合わせ"
                description=""
            />
            <Content
                contentTitle='お問い合わせ'
                text={text}
                id={ids.contact.contact}
            />
        </>
    )
}

export default Contact;