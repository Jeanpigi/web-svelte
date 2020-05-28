<script>
    import Button from './Button.svelte';


    let someText = `Frontend Developer at JP`;
    let count = 0;
    let styles = { darkMode: false };

    function handleClick() {
        count += 1;
    }

    function toggle() {
        styles.darkMode = !styles.darkMode;
        window.document.body.classList.toggle("dark-mode");
    }
</script>

<style>
    p {
        color: var(--theme-color);
    }
</style>

<div class="About">

    {#if !styles.darkMode}
        <p>{someText}</p>
    {:else}
        <p>Hello Dark Mode</p>
    {/if}

    <Button
        text="Click"
        count={count}
        on:click={handleClick}>
    </Button>

    <Button text="DarkMode" on:click={toggle}></Button>

</div>
