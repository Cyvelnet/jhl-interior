<p>{{ $text }}</p>

<p>
	<strong>Sender Information:</strong> <br/><br/>

	Name : {{ $name }} <br/>
	Email : {{ $email }} <br/>
	Phone : {{ $phone }} <br/>
</p>

@if($ip)

	<small style="color: #bbb">This message is send from ip address: {{ $ip }} at {{ now()->format('M d, Y H:i:s') }}</small>

@endif
