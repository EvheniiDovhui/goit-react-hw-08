import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TitlePage from '../../components/TitlePage/TitlePage'
import ContactList from '../../components/ContactList/ContactList'
import ContactForm from '../../components/ContactForm/ContactForm'
import { fetchContacts } from '../../redux/contacts/operations'
import { selectLoading } from '../../redux/contacts/selectors'
import SearchBox from '../../components/SearchBox/SearchBox'
import { selectError } from '../../redux/contacts/selectors'
import Title from '../../components/Title/Title'

export default function Tasks() {
	const dispatch = useDispatch()
	const isLoading = useSelector(selectLoading)
	const error = useSelector(selectError)

	useEffect(() => {
		dispatch(fetchContacts())
	}, [dispatch])

	return (
		<>
			<TitlePage>Your contacts</TitlePage>
			<Title />
			<ContactForm />
			<SearchBox />
			{isLoading && !error && <ContactList />}
		</>
	)
}
