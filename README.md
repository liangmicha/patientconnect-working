Patient Connect


TODO
- Mutations kinda work but not really. Get them working, might need an actual FIELD to make the
on-the-fly update. Right now, only if I refresh page does the number change, which is
not something I want.

I think a better mutation to do would be once we have a profile page, click edit, and the fields
will change, and then see the changes reflected.

Decided not to use relay. Going with Parse backend because set up is easier.

I should think about using Reect Router instead of this hacking navigation.
I also found myself doing too much hacking lately, instead, let's look at some examples.

--
Once I am logged in, how do I know what user I am logged in as? => done

Next, try to link a Profile model with the user. Use 1:1 Mapping.


Once you sign in, check out your profile.

user
location
languages
currentLocation

--

Figure out how queries work. Are they in parallel or sequential?