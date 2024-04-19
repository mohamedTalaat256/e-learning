package com.mido.elearning.security;

import com.mido.elearning.entity.AppUser;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Setter
@Getter
@Log4j2
public class AppUserDetail implements UserDetails {

    private Long id ;

    private String firstName;
    private String lastName;

    private String username;

    private String password ;

    private String email;

    private List<GrantedAuthority> authorities ;

    private boolean isEnabled;

    private boolean isCredentialsNonExpired;

    private boolean isAccountNonLocked;

    private boolean isAccountNonExpired;

    public AppUserDetail() {
        super();
    }

    public AppUserDetail(AppUser user) {
        super();
        this.id= user.getId();
        this.firstName =user.getFirstName();
        this.lastName =user.getLastName();
        this.username= user.getUsername();
        this.email= user.getEmail();
        this.password= user.getPassword();
        this.isEnabled = user.isEnabled();
        this.isCredentialsNonExpired = user.isCredentialsNonExpired();
        this.isAccountNonExpired = user.isAccountNonExpired();
        this.isAccountNonLocked = user.isAccountNonLocked();

        List<GrantedAuthority> newAuthorities = new ArrayList<>();


        if(!user.getRoles().isEmpty()) {
            user.getRoles().forEach(role -> {
                newAuthorities.add(new SimpleGrantedAuthority(role.getName()));
            });
        }

        this.authorities = newAuthorities;

    }



    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        // TODO Auto-generated method stub
        return password;
    }

    @Override
    public String getUsername() {
        // TODO Auto-generated method stub
        return username;
    }


    public String getEmail() {
        // TODO Auto-generated method stub
        return email;
    }


    @Override
    public boolean isAccountNonExpired() {
        // TODO Auto-generated method stub
        return isAccountNonExpired;
    }

    @Override
    public boolean isAccountNonLocked() {
        // TODO Auto-generated method stub
        return isAccountNonLocked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        // TODO Auto-generated method stub
        return isCredentialsNonExpired;
    }

    @Override
    public boolean isEnabled() {
        // TODO Auto-generated method stub
        return isEnabled;
    }

}
