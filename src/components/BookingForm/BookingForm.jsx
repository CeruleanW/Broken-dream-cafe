import React, { Component } from "react";
import styles from "../../css/BookingForm.module.css";
import ResponsiveForm from "./ResponsiveForm";

// Features to be done:
// validation

export default class BookingForm extends Component {
    render() {
        return (
            <section className={styles.formPadding} id={this.props.id}>
                <ResponsiveForm />
            </section>
        );
    }
}
